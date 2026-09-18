function FriendsSection({ onInvite }) {
  const friends = [
    { name: 'Aman', status: 'Ready to ride' },
    { name: 'Sara', status: 'At the cafe' },
    { name: 'Rahul', status: 'On trail' },
  ]

  return (
    <section className="info-panel">
      <div className="panel-header">
        <h3>Friends</h3>
        <span>Online</span>
      </div>

      <ul className="list-items compact">
        {friends.map((friend) => (
          <li key={friend.name}>
            <div className="avatar">{friend.name.charAt(0)}</div>
            <div>
              <strong>{friend.name}</strong>
              <small>{friend.status}</small>
            </div>
            <button className="item-action" onClick={() => onInvite(friend.name)}>Invite</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FriendsSection
