document.addEventListener('DOMContentLoaded', () => {
    getActivities()
})

function getActivities() {
    let ul = document.getElementById("activity-list")
    fetch("http://www.boredapi.com/api/activity/")
    .then(resp => resp.json())
    .then(data => {
    console.log(data)
    data.map(activity => {
        
    })
    })
}
