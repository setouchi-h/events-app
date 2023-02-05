const EventPage = () => {
  return (
    <div>
      <h1>Our Single Event</h1>
    </div>
  )
}

export default EventPage

export async function getStaticPaths() {
  const data = await import("/data/data.json")
  const allEvents = data

  const allPaths = allEvents.map(path => {})

  return {
    paths: [],
  }
}
