import { toggleMenuAction } from "./routes.js";

const $ = document;

const heroTabs = $.querySelector("#hero-tabs");
const heroTabButtons = $.querySelectorAll('.tab');
const tabContent = $.querySelector("#tab-content")

let activeTab = "BEGINNER";

toggleMenuAction()


const tabInit = () => {
    tabContent.innerHTML = ""
    if (activeTab == "BEGINNER") {

        tabContent.insertAdjacentHTML('beforeend', `
            <p class="text-2xl">Beginner Level</p>
<p class="text-sm text-zinc-400 font-Poppins-Light mt-1">
Perfect for those just starting their English journey
</p>

<div
class="hero-styles"
>
<div>
<!-- icon -->
<span
 class="text-lg txt-zinc-500 flex items-center justify-center"
>
 <i class="bx bx-book-open"></i>
</span>
<p class="font-Poppins-Medium">Basic Grammer</p>
</div>
<div>
<!-- icon -->
<span
 class="text-lg txt-zinc-500 flex items-center justify-center"
>
 <i class="bx bx-headphone"></i>
</span>
<p class="font-Poppins-Medium">Simple Listening</p>
</div>
<div>
<!-- icon -->
<span
 class="text-lg txt-zinc-500 flex items-center justify-center"
>
 <i class="bx bx-chat"></i>
</span>
<p class="font-Poppins-Medium">Daily Conversations</p>
</div>
<div>
<!-- icon -->
<span
 class="text-lg txt-zinc-500 flex items-center justify-center"
>
 <i class="bx bx-crown"></i>
</span>
<p class="font-Poppins-Medium">Achieveements Tests</p>
</div>
</div>
 `)
    } else if (activeTab == "INTER") {
        tabContent.insertAdjacentHTML('beforeend', `
            <p class="text-2xl">Intermediate Level</p>
                    <p class="text-sm text-zinc-400 font-Poppins-Light mt-1">
                   For learners ready to take their English to the next level

                    </p>

                    <div
                    class="hero-styles"
                    >
                    <div>
                    <!-- icon -->
                    <span
                     class="text-lg txt-zinc-500 flex items-center justify-center"
                    >
                     <i class="bx bx-book-open"></i>
                    </span>
                    <p class="font-Poppins-Medium">Advanced Grammer</p>
                    </div>
                    <div>
                    <!-- icon -->
                    <span
                     class="text-lg txt-zinc-500 flex items-center justify-center"
                    >
                     <i class="bx bx-headphone"></i>
                    </span>
                    <p class="font-Poppins-Medium">Complex Listening</p>
                    </div>
                    <div>
                    <!-- icon -->
                    <span
                     class="text-lg txt-zinc-500 flex items-center justify-center"
                    >
                     <i class="bx bx-chat"></i>
                    </span>
                    <p class="font-Poppins-Medium">Business English</p>
                    </div>
                    <div>
                    <!-- icon -->
                    <span
                     class="text-lg txt-zinc-500 flex items-center justify-center"
                    >
                     <i class="bx bx-crown"></i>
                    </span>
                    <p class="font-Poppins-Medium">IELTS Prep</p>
                    </div>
            </div>
 `)
    } else {
        tabContent.insertAdjacentHTML('beforeend', `
            <p class="text-2xl">Advanced Level
</p>
                    <p class="text-sm text-zinc-400 font-Poppins-Light mt-1">
                        Master complex language skills and achieve fluency
                    </p>

                    <div
                    class="hero-styles"
                    >
                    <div>
                    <!-- icon -->
                    <span
                     class="text-lg txt-zinc-500 flex items-center justify-center"
                    >
                     <i class="bx bx-book-open"></i>
                    </span>
                    <p class="font-Poppins-Medium">Academic Writing</p>
                    </div>
                    <div>
                    <!-- icon -->
                    <span
                     class="text-lg txt-zinc-500 flex items-center justify-center"
                    >
                     <i class="bx bx-headphone"></i>
                    </span>
                    <p class="font-Poppins-Medium">Native Content</p>
                    </div>
                    <div>
                    <!-- icon -->
                    <span
                     class="text-lg txt-zinc-500 flex items-center justify-center"
                    >
                     <i class="bx bx-chat"></i>
                    </span>
                    <p class="font-Poppins-Medium">Public Speaking</p>
                    </div>
                    <div>
                    <!-- icon -->
                    <span
                     class="text-lg txt-zinc-500 flex items-center justify-center"
                    >
                     <i class="bx bx-crown"></i>
                    </span>
                    <p class="font-Poppins-Medium">Proficiency</p>
                    </div>
            </div>
 `)
    }
}


window.onload = () => {
    heroTabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const TAB_DATA = button.dataset.tab;

            // Update activeTab
            activeTab = TAB_DATA;

            heroTabButtons.forEach(btn => btn.classList.remove('active-tab'));
            tabInit()

            button.classList.add('active-tab');
        });
    });

    tabInit()
};
