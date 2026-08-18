import './Education.css'

const education = [
  {
    text: 'С отличием закончила ',
    institution: 'ГБПОУ РО "РКСИ"',
    middle: ' по специальности ',
    specialty: '"Информационные системы и программирование"',
  },
  {
    text: 'На данный момент обучаюсь на 2 курсе в ',
    institution: 'РГЭУ (РИНХ)',
    middle: ', специальность: ',
    specialty: '"Информационные системы и технологии"',
  },
]

export default function Education() {
  return (
    <section className="education">
      <div className="education__container">
        <h2 className="section-title">Образование</h2>
        {education.map((edu, i) => (
          <p className="education__item" key={i}>
            {edu.text}
            <b>{edu.institution}</b>
            {edu.middle}
            <b>{edu.specialty}</b>
          </p>
        ))}
      </div>
    </section>
  )
}
