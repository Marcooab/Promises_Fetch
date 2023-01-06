// Creating Promises
const myPromise = new Promise((resolve, reject) => {
  const name = "Marco"

  if(name === "Marco"){
    resolve("SUCCESS: User Marco has been found!")
  }else{
    reject("User Marco has not been found!")
  }
})

myPromise.then((data) => {
  console.log(data)
})

// Nesting Thens
const myPromise2 = new Promise((resolve, reject) => {
  const name = "Marco"

  if(name === "Marco"){
    resolve("User Marco has been found!")
  }else{
    reject("User Marco has not been found!")
  }
})

myPromise2
.then((data) => {
  return data.toLowerCase()
})
.then((stringmodified) => {
  console.log("lower case: ", stringmodified)
})

const myPromise3 = new Promise((resolve, reject) => {
  const name = "Marco"

  if(name === "Marco"){
    resolve("User Marco has been found!")
  }else{
    reject("User Marco has not been found!")
  }
})

// Nesting Thens 2
myPromise3
.then((data) => {
  return data.toUpperCase()
})
.then((stringmodified2) => {
  console.log("UPPER CASE: ", stringmodified2)
})


//Catch Return
const myPromise4 = new Promise((resolve, reject) => {
  const name = "Joao"

  if(name === "Marco"){
    resolve("User Marco has been found!")
  }else{
    reject("User Marco has not been found!")
  }
})

myPromise4
.then((data) => {
  console.log(data)
}).catch((err) => {
  console.log("ERROR: An error has happened!")
})

//Solving Many Promises
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 ok! Timeout")
  }, 3000)
  
})

const p2 = new Promise((resolve, reject) => {
  resolve("P2 ok")
})

const p3 = new Promise((resolve, reject) => {
  resolve("P3 ok")
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
  console.log("PROMISE ALL : ", data)
})

console.log("Consoling 'after' Promise ALL")

//Many Promises with Race

const p4 = new Promise((resolve, reject) => {
    resolve("P4 ok!")
})

const p5 = new Promise((resolve, reject) => {
  resolve("P5 ok")
})

const p6 = new Promise((resolve, reject) => {
  resolve("P6 ok")
})

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
  console.log("PROMISE Race : ", data)
})

// Fetch Request - GitHub API
const userName = "Marcooab"

fetch(`https://api.github.com/users/${userName}`, {
  method: "GET", 
  headers: {
    Accept: "application/vnd.github.v3+json"
  },
}).then((response) => {
  console.log(typeof response)
  console.log(response)
  return response.json()
}).then((data) => {
  console.log(data)
  console.log(`UserName:${data.name}`)
  console.log(`Url: ${data.url}`)
}).catch((err) => {
  console.log("Houve algum erro: ", err)
})