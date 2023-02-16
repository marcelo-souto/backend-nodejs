
const url = window.location.host
const body = document.body
const content = document.querySelector('.content')

const paths = ['products', 'categories'];
const routes = [
  { method: 'get', route: '/' },
  { method: 'get', route: '/:id' },
  { method: 'post', route: '/' },
  { method: 'put', route: '/' },
  { method: 'delete', route: '/:id' },
];

paths.forEach((path) => {
    const containerList = document.createElement('div')
    containerList.classList.add('containerList')
    const list = document.createElement('ul')
    const title = document.createElement('a')
    title.href = `https://${url}/${path}`
    title.innerText = path

    routes.forEach(({ method, route }) => {
      const lisItem = document.createElement('li')

      lisItem.innerText = `${method.toUpperCase()}: ${url}/${path}${route === '/' ? '' : route}`
      list.append(lisItem);
    })

    containerList.append(title)
    containerList.append(list)
    content.append(containerList)
});
