import './Skills.css'

const categories = [
  {
    title: 'Мобильная разработка',
    color: 'pink',
    items: [
      'Flutter (Dart)',
      'Bloc',
      'Riverpod',
      'dio',
      'freezed',
      'json_serializable',
      'auto_route',
      'go_router',
      'shared_preferences',
      'flutter_map',
      'intl',
      'rxDart',
      'flutter_secure_storage',
      'clean_architecture',
      'AppMetrica',
      'AppStore, GooglePlay, AppGallery, RuStore',
    ],
  },
  {
    title: 'Серверная часть',
    color: 'green',
    items: ['Python', 'Django', 'Docker', 'DRF', 'Djoser', 'JWT', 'SQL'],
  },
  {
    title: 'Также знаю',
    color: 'gray',
    items: ['GIT', 'Firebase', 'Figma', '1С Предприятие'],
  },
]

export default function Skills() {
  return (
    <section className="skills">
      <div className="skills__container">
        <h2 className="section-title">Навыки</h2>
        {categories.map((cat) => (
          <div className="skills__group" key={cat.title}>
            <h3 className="skills__group-title">{cat.title}</h3>
            <div className="skills__list">
              {cat.items.map((skill) => (
                <span className={`skills__badge skills__badge--${cat.color}`} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
