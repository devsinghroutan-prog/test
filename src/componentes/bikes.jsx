import { useState } from 'react'

function BikeSection({ onSelectBike }) {
  const [filter, setFilter] = useState('All')
  const bikes = [
    { name: 'Kawasaki Ninja', type: 'Sport', range: '220 km' },
    { name: 'Royal Enfield', type: 'Classic', range: '180 km' },
      { name: 'Yamaha R15M', type: 'Track', range: '210 km' },
  ]
    const types = ['All', ...new Set(bikes.map((bike) => bike.type))]
    const visibleBikes = filter === 'All' ? bikes : bikes.filter((bike) => bike.type === filter)

  return (
    <section className="info-panel">
      <div className="panel-header">
        <h3>Bikes</h3>
        <select value={filter} onChange={(event) => setFilter(event.target.value)} aria-label="Filter bikes">
          {types.map((type) => <option key={type}>{type}</option>)}
        </select>
      </div>

      <ul className="list-items">
        {visibleBikes.map((bike) => (
          <li key={bike.name}>
            <div>
              <strong>{bike.name}</strong>
              <small>{bike.type}</small>
            </div>
            <button className="item-action" onClick={() => onSelectBike(bike.name)}>Choose</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BikeSection
