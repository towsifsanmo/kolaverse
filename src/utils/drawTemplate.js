export function drawTemplate(context, width, height, name) {
  context.save()
  context.strokeStyle = '#111111'
  context.lineWidth = 3.5
  context.lineCap = 'round'
  context.lineJoin = 'round'
  if (name === 'boat') {
    const cx = width / 2
    const cy = height / 2 + 40
    context.beginPath()
    context.moveTo(cx - 140, cy)
    context.quadraticCurveTo(cx, cy + 80, cx + 150, cy)
    context.quadraticCurveTo(cx, cy + 20, cx - 140, cy)
    context.stroke()
    context.beginPath()
    context.moveTo(cx - 20, cy)
    context.lineTo(cx - 20, cy - 130)
    context.lineTo(cx + 60, cy - 40)
    context.lineTo(cx - 20, cy - 40)
    context.stroke()
    context.beginPath()
    context.moveTo(cx - 180, cy + 70)
    for (let index = 0; index < 6; index += 1) context.quadraticCurveTo(cx - 150 + index * 60, cy + 50, cx - 120 + index * 60, cy + 70)
    context.stroke()
  } else if (name === 'flower') {
    const cx = width / 2
    const cy = height / 2 + 30
    context.beginPath()
    context.moveTo(cx, cy + 20)
    context.quadraticCurveTo(cx - 25, cy - 60, cx, cy - 110)
    context.quadraticCurveTo(cx + 25, cy - 60, cx, cy + 20)
    context.moveTo(cx - 10, cy + 15)
    context.quadraticCurveTo(cx - 70, cy - 30, cx - 80, cy - 80)
    context.quadraticCurveTo(cx - 40, cy - 60, cx, cy - 30)
    context.moveTo(cx + 10, cy + 15)
    context.quadraticCurveTo(cx + 70, cy - 30, cx + 80, cy - 80)
    context.quadraticCurveTo(cx + 40, cy - 60, cx, cy - 30)
    context.stroke()
    context.beginPath()
    context.ellipse(cx, cy + 45, 130, 25, 0, 0, Math.PI * 2)
    context.stroke()
  } else if (name === 'sun') {
    const cx = width / 2
    const cy = height / 2 - 20
    context.beginPath()
    context.arc(cx, cy, 65, 0, Math.PI * 2)
    context.stroke()
    for (let index = 0; index < 12; index += 1) {
      const angle = (index * Math.PI) / 6
      context.beginPath()
      context.moveTo(cx + Math.cos(angle) * 75, cy + Math.sin(angle) * 75)
      context.lineTo(cx + Math.cos(angle) * 110, cy + Math.sin(angle) * 110)
      context.stroke()
    }
    context.beginPath()
    context.arc(cx - 22, cy - 12, 6, 0, Math.PI * 2)
    context.arc(cx + 22, cy - 12, 6, 0, Math.PI * 2)
    context.fillStyle = '#111111'
    context.fill()
    context.beginPath()
    context.arc(cx, cy + 10, 28, 0.2 * Math.PI, 0.8 * Math.PI)
    context.stroke()
  }
  context.restore()
}
