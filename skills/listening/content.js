import { metadata } from "../../scripts/modules.js"
import { pageContent, toggleMenuAction } from "../../scripts/routes.js"
const $ = document
const pageTitle = $.querySelector("#title")
const pageDescription = $.querySelector("#description")
const heroImg = $.querySelector("#hero-image")
const content = pageContent()
const level = $.querySelector("#level")
const transcripts = $.querySelector("#transcripts")
const audioPlayer = $.querySelector("#audio")

const transcriptBtn = $.querySelector("#transcript-button")

const initUI = () => {
  pageTitle.innerText = content.title
  heroImg.src = `./../../${content.image}`
  pageDescription.innerHTML = content.description
  level.innerHTML = content.level
  audioPlayer.src = content.audio

  transcripts.innerHTML = ""
  content.conversation.forEach((chat) => {
    transcripts.insertAdjacentHTML('beforeend', `
                              <div>
            <span class="flex items-center gap-1">
              <span class="mt-1">
                <!-- Bx Speaker icon -->
                <i class="bx bx-user-voice"></i>
              </span>
              <span class="text-sm">${chat.speaker}:</span>
            </span>
            <p class="ml-5">
              <span class="text-sm font-Poppins-Regular text-zinc-700">
                ${chat.text}
              </span>
            </p>
          </div>
                `)
  })

  return metadata(content.title, content.description)

}

const toggleTranscript = () => {
  transcripts.classList.toggle("hidden-section")
}

window.onload = () => {
  initUI()
  toggleMenuAction()
  transcriptBtn.addEventListener('click', toggleTranscript)
}
