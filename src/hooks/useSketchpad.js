import { useCallback, useEffect, useRef, useState } from 'react'
import { drawTemplate } from '../utils/drawTemplate.js'

export function useSketchpad(currentView, showToast) {
  const [brushSize, setBrushSize] = useState(6)
  const [selectedColor, setSelectedColor] = useState('#111111')
  const [isEraser, setIsEraser] = useState(false)
  const [activeTemplate, setActiveTemplate] = useState('boat')
  const activeTemplateRef = useRef('boat')
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const drawingRef = useRef(false)
  const lastPointRef = useRef({ x: 0, y: 0 })

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const ratio = window.devicePixelRatio || 1
    canvas.width = rect.width * ratio
    canvas.height = rect.height * ratio
    const context = canvas.getContext('2d')
    if (!context) return
    context.scale(ratio, ratio)
    context.lineCap = 'round'
    context.lineJoin = 'round'
    context.fillStyle = '#FAF8F5'
    context.fillRect(0, 0, rect.width, rect.height)
    contextRef.current = context
  }, [])

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const context = contextRef.current
    if (!canvas || !context) return
    const rect = canvas.getBoundingClientRect()
    context.fillStyle = '#FAF8F5'
    context.fillRect(0, 0, rect.width, rect.height)
    activeTemplateRef.current = 'none'
    setActiveTemplate('none')
  }, [])

  const loadTemplate = useCallback((name) => {
    clearCanvas()
    activeTemplateRef.current = name
    setActiveTemplate(name)
    const canvas = canvasRef.current
    const context = contextRef.current
    if (!canvas || !context) return
    const rect = canvas.getBoundingClientRect()
    drawTemplate(context, rect.width, rect.height, name)
  }, [clearCanvas])

  useEffect(() => {
    if (currentView !== 'home') return undefined
    initializeCanvas()
    const canvas = canvasRef.current
    const context = contextRef.current
    if (canvas && context) {
      const rect = canvas.getBoundingClientRect()
      drawTemplate(context, rect.width, rect.height, activeTemplateRef.current)
    }
    const resizeCanvas = () => {
      initializeCanvas()
      if (activeTemplateRef.current !== 'none') {
        const resizedCanvas = canvasRef.current
        const resizedContext = contextRef.current
        if (resizedCanvas && resizedContext) {
          const rect = resizedCanvas.getBoundingClientRect()
          drawTemplate(resizedContext, rect.width, rect.height, activeTemplateRef.current)
        }
      }
    }
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [currentView, initializeCanvas])

  const resetTemplateForHome = () => {
    if (canvasRef.current && contextRef.current) {
      loadTemplate('boat')
    } else {
      activeTemplateRef.current = 'boat'
      setActiveTemplate('boat')
    }
  }

  const getCoordinates = (event) => {
    const rect = canvasRef.current.getBoundingClientRect()
    return { x: event.clientX - rect.left, y: event.clientY - rect.top }
  }

  const startDrawing = (event) => {
    const context = contextRef.current
    if (!context) return
    event.currentTarget.setPointerCapture(event.pointerId)
    drawingRef.current = true
    const { x, y } = getCoordinates(event)
    lastPointRef.current = { x, y }
    context.beginPath()
    context.arc(x, y, brushSize / 2, 0, Math.PI * 2)
    context.fillStyle = isEraser ? '#FAF8F5' : selectedColor
    context.fill()
  }

  const draw = (event) => {
    const context = contextRef.current
    if (!drawingRef.current || !context) return
    const { x, y } = getCoordinates(event)
    context.beginPath()
    context.moveTo(lastPointRef.current.x, lastPointRef.current.y)
    context.lineTo(x, y)
    context.strokeStyle = isEraser ? '#FAF8F5' : selectedColor
    context.lineWidth = brushSize
    context.stroke()
    lastPointRef.current = { x, y }
  }

  const stopDrawing = (event) => {
    if (!drawingRef.current) return
    drawingRef.current = false
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
  }

  const downloadArtwork = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const link = document.createElement('a')
    link.download = 'kalaverse-art-drawing.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
    showToast('ছবি সফলভাবে ডাউনলোড হয়েছে!')
  }

  return {
    activeTemplate,
    brushSize,
    canvasRef,
    clearCanvas,
    downloadArtwork,
    draw,
    isEraser,
    loadTemplate,
    resetTemplateForHome,
    selectedColor,
    setBrushSize,
    setIsEraser,
    setSelectedColor,
    startDrawing,
    stopDrawing,
  }
}
