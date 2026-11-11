export const branches = [
  { code: 'P', day: 'বৃহস্পতিবার', time: '৪.৩০ - ৬.০০', name: 'শাখা P — বৃহস্পতিবার (৪.৩০ - ৬.০০)' },
  { code: 'Z', day: 'শুক্রবার', time: '১০.৩০ - ১২.০০', name: 'শাখা Z — শুক্রবার (১০.৩০ - ১২.০০)' },
  { code: 'S', day: 'শনিবার', time: '৪.৩০ - ৬.০০', name: 'শাখা S — শনিবার (৪.৩০ - ৬.০০)' },
  { code: 'N', day: 'বুধবার', time: '৪.৩০ - ৬.০০', name: 'শাখা N — বুধবার (৪.৩০ - ৬.০০)' },
  { code: 'C', day: 'সোমবার', time: '৪.৩০ - ৬.০০', name: 'শাখা C — সোমবার (৪.৩০ - ৬.০০)' },
]

export const initialAdmission = {
  studentName: '',
  age: 6,
  gender: 'ছেলে',
  school: '',
  experience: 'নতুন শিক্ষার্থী (কোনো পূর্ব অভিজ্ঞতা নেই)',
  branch: branches[0].name,
  guardianName: '',
  guardianPhone: '',
  address: '',
  hasSibling: false,
}

export const studentProfile = {
  name: 'আরিয়ান আহমেদ',
  id: 'KV-2026-08',
  group: 'শিশু',
  branch: 'শাখা P',
  branchCode: 'P',
  classDay: 'বৃহস্পতিবার',
  classTime: '৪.৩০ - ৬.০০',
  guardian: 'আফরোজা বেগম',
  phone: '০১৭৫XXXXXXXX',
}

export const studentArtworks = [
  { title: 'গ্রামের নদী ও ডিঙি নৌকা', medium: 'জলরং ও তেল পেস্টেল', date: '২৮ অক্টোবর ২০২৬', grade: 'A+', icon: '⛵' },
  { title: 'রঙিন শাপলা ফুল', medium: 'প্যাস্টেল কালার', date: '১৫ অক্টোবর ২০২৬', grade: 'A', icon: '🌸' },
  { title: 'বৈশাখী বাঘের মুখোশ', medium: 'পোস্টার কালার', date: '০২ অক্টোবর ২০২৬', grade: 'A+', icon: '🐯' },
]

export const paymentHistory = [
  { receiptNo: 'REC-8921', purpose: 'ভর্তি ফি ও অক্টোবর বেতন', date: '০১ অক্টোবর ২০২৬', amount: '৩৫০০' },
  { receiptNo: 'REC-9104', purpose: 'নভেম্বর ২০২৬ মাসিক বেতন', date: '০৩ নভেম্বর ২০২৬', amount: '১৫০০' },
]

export const colors = ['#111111', '#A69D88', '#D35400', '#F39C12', '#27AE60', '#2980B9', '#8E44AD']
