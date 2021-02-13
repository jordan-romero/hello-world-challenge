const url = 'https://storage.googleapis.com/hw-challenge-assets/course-level-view/course.json'

export const getCourse = () => {
    return fetch(url)
        .then(response => response.json())
}

// trying to find work around for cors: 
// export const getCourse = () => {
//     return fetch(url, {
//         mode: 'no-cors'}
//         .then(response => response.json())
//         )
//     }