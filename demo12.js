var user = { "name": "Mark", 'location': "Taipei", role: "R&D" }
console.log(user)
var empty = {}
console.log(empty)
console.log(empty.name)
var user2 = {}
user2['name'] = "James"
user2['location'] = "Hsinchu"
console.log(user2.name, user2.location, user2.role)
user2['role'] = 'FAE'
console.log(user2.name, user2.location, user2.role)
delete user2.name
console.log(user2)
console.log("user2 has __ attributes?", Object.keys(user2).length)
console.log(`user2 has ${Object.keys(user2).length} attributes.`,)