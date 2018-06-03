
# ./ GET
params = null
Sends the webpage

# ./leaderboard GET
params = null
res = [
  {
    username, bestMoves, bestTime
  }
]
Sends the leaderboard


# ./solve POST
params = {
  config: "1,2,34 ..."
}
res = {
  moves: lrrud,
  timeTaken : Number
}
Sends the solved moves and timetaken

# ./ POST
params = {
  username, password( unhashed)
}
res = {
  header has x-auth token,
  if login refer ./game GET
  if signup none
}

# ./game GET
params = {
  header has x-auth
}
res = {
  'currConfig','currTime','movesMade'
}

# ./game POST
params = {
  header has x-auth
  ['config','time','moves']
}
res = {
  none
}

# ./game/complete POST
params = {
  header has x-auth
  'time', 'moves'
}
res = {
  none
}