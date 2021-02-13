const url = 'https://storage.googleapis.com/hw-challenge-assets/course-level-view/course.json'

export const getCourse = () => {
    return fetch(url)
        .then(response => response.json())
}