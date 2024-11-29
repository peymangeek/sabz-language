import { items, pages, toggleMenuAction } from './routes.js'

const $ = document

const URLParams = new URLSearchParams(window.location.search).get('page')
const cardsContainer = $.querySelector("#cards")
const container = $.querySelector("#container")
const titleSection = $.querySelector("#title-section")



const renderUI = (items, page) => {
  cardsContainer.innerHTML = ""
  items.forEach(card => {
    const removedSymbolsURL = String(card.title).toLowerCase().replace('–', null)
    const _URL = String(removedSymbolsURL).replace(/ /g, "-")
    cardsContainer.insertAdjacentHTML(`beforeend`, `
               <article class="data-card gap-4">
          <div
            class="h-[240px] mb-2 bg-zinc-100 rounded-md overflow-hidden"
          >
            <img src="${card.image}" alt="${card.title}" class="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col justify-between">
            <div>
              <h4 class="text-2xl font-Poppins-Bold">
              ${card.title}
              </h4>
              <p class="font-Poppins-Regular mt-2 text-zinc-700">
                ${card.description}
              </p>
            </div>
            <a
              href="/sabz-language/skills/listening/?page=${page}&title=${_URL}"
              class="bg-gradient-to-t mt-3 flex items-center justify-center from-zinc-950 to-zinc-800 max-w-max px-10 text-white h-10 rounded-md"
            >
              Continue
            </a>
          </div>
        </article>`)
  })
}

const notFound = () => {
  container.innerHTML = ""
  container.className = ""
  container.insertAdjacentHTML('beforeend', `
        <section class="bg-white w-full dark:bg-gray-900">
<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center">
        <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-indigo-600 dark:text-indigo-500">404</h1>
        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
        <a href="/" class="inline-flex text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-indigo-900 my-4">Back to Homepage</a>
    </div>   
</div>
</section>
  `)
}

const setPageTitle = (title, desc) => {
  document.title = `SabzLanguage - ${title}`

  titleSection.insertAdjacentHTML('beforeend', ` <section>
        <h2
          class="lg:text-3xl sm:text-2xl text-xl ml-6 font-Poppins-Bold mb-6 relative flex items-center before:absolute before:content-[''] before:size-4 before:rounded-sm before:bg-green-500 before:-left-6"
        >
        ${title}
        </h2>
   
        <p class="text-zinc-700 font-Poppins-Light my-10">
        ${desc}
        </p>
      </section>`)
}

window.onload = () => {
  if (URLParams == pages[0]) {

    renderUI(items.a1, 'A1')

    setPageTitle("Choose a listening lesson", `Are you a learner at A1 English level (elementary)? This section
          offers listening practice to help you understand familiar words and
          basic phrases when people speak slowly and clearly. Situations include
          meeting people, shopping and conversations at work.
          <br /><br />
          Each lesson has a preparation task, an audio recording and two tasks
          to check your understanding and to practise a variety of listening
          skills. Make a start today!`)

  } else if (URLParams == pages[1]) {
    setPageTitle("A2 listening", `   Are you a learner at A2 English level (pre-intermediate)? This section offers listening practice to help you understand common vocabulary and expressions in short, clear dialogues. Situations include simple explanations, introductions, messages and announcements.
            <br /><br />
        Each lesson has a preparation task, an audio recording and two tasks to check your understanding and to practise a variety of listening skills. Make a start today!`)

    renderUI(items.a2, 'A2')
  } else if (URLParams == pages[2]) {
    setPageTitle("B1 listening", `Are you a learner at B1 English level (intermediate)? This section offers listening practice to help you understand the main points of clear, standard speech about everyday or job-related topics. Situations include phone calls, meetings and interviews.
            <br /><br />
Each lesson has a preparation task, an audio recording and two tasks to check your understanding and to practise a variety of listening skills. Make a start today!`)
    renderUI(items.b1, 'B1')

  } else if (URLParams == pages[3]) {
    setPageTitle("B2 listening", `       Are you a learner at B2 English level (upper intermediate)? This section offers listening practice to help you understand extended, standard speech about familiar topics that may contain complex ideas. Situations include broadcasts, reviews, presentations and lectures.
            <br /> <br />
Each lesson has a preparation task, an audio recording and two tasks to check your understanding and to practise a variety of listening skills. Make a start today!`)
    renderUI(items.b2, "B2")
  } else if (URLParams == pages[4]) {
    setPageTitle("C1 listening", `       Are you a learner at C1 English level (advanced)? This section offers listening practice to help you understand extended, standard speech about unfamiliar topics that may contain complex ideas. Situations include broadcasts, reviews, presentations and lectures.
            <br /> <br />
Each lesson has a preparation task, an audio recording and two tasks to check your understanding and to practise a variety of listening skills. Make a start today!`)
    renderUI(items.c1, "C1")
  } else if (URLParams == pages[5]) {

  } else {
    notFound()
  }

toggleMenuAction()
}

export const metadata = (title, desc) => {
  window.title = `Sabz Language - ${title}`
  document.querySelector('meta[name="description"]').setAttribute("content", desc);
}
