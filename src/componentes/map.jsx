function MapSection({ onStartRoute }) {
  return (
    <section className="info-panel map-panel">
      <div className="panel-header">
        <h3>Map</h3>
        <button className="item-action" onClick={onStartRoute}>Start route</button>
      </div>

      <div className="map-box" aria-label="Map preview">
        <div className="route route-one" />
        <div className="route route-two" />
        <div className="marker marker-one" />
        <div className="marker marker-two" />
      </div>
    </section>
  )
}

export default MapSection
