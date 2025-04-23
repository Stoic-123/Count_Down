const events = [
    {
      nameEn: "Khmer New Year",
      nameKh: "បុណ្យចូលឆ្នាំខ្មែរ",
      date: "2026-04-14",
      funFactEn:
        "Khmer New Year is celebrated for three days, each with its own special meaning.",
      funFactKh:
        "បុណ្យចូលឆ្នាំខ្មែរត្រូវបានប្រារព្ធឡើងរយៈពេលបីថ្ងៃ ដោយថ្ងៃនីមួយៗមានអត្ថន័យពិសេសរៀងៗខ្លួន។",
      image:
        "https://www.redbus.com.kh/blogs/wp-content/uploads/2024/03/Khmer-new-year-2024.jpg?height=200&width=600&text=Khmer+New+Year",
    },
    {
      nameEn: "Water Festival",
      nameKh: "បុណ្យអុំទូក",
      date: "2025-11-04",
      funFactEn:
        "The Water Festival commemorates the end of the rainy season and the reversal of flow of the Tonle Sap River.",
      funFactKh:
        "ពិធីបុណ្យអុំទូកគឺជាការប្រារព្ធពិធីបញ្ចប់រដូវវស្សា និងការបញ្ច្រាសទិសនៃចរន្តទឹកទន្លេសាប។",
      image:
        "https://cdn.pixabay.com/photo/2019/10/15/05/41/khmer-water-festival-4550646_1280.jpg?height=200&width=600&text=Water+Festival",
    },
    {
      nameEn: "Pchum Ben",
      nameKh: "បុណ្យភ្ជុំបិណ្ឌ",
      date: "2025-9-23",
      funFactEn:
        "Pchum Ben is a 15-day Cambodian religious festival, culminating in celebrations on the 15th day of the tenth month in the Khmer calendar.",
      funFactKh:
        "បុណ្យភ្ជុំបិណ្ឌគឺជាពិធីបុណ្យសាសនាខ្មែរដែលមានរយៈពេល១៥ថ្ងៃ ដោយថ្ងៃសំខាន់បំផុតគឺនៅថ្ងៃទី១៥នៃខែទី១០ក្នុងប្រតិទិនខ្មែរ។",
      image:
        "https://www.redbus.com.kh/blogs/wp-content/uploads/2024/08/Pchum-Ben-2024_11zon-1.jpg?height=200&width=600&text=Pchum+Ben",
    },
    {
      nameEn: "Bac II Exam",
      nameKh: "ការប្រឡងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ",
      date: "2025-08-18",
      funFactEn:
        "The Bac II Exam is a crucial milestone for Cambodian students, determining their eligibility for university admission.",
      funFactKh:
        "ការប្រឡងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិគឺជាការប្រឡងដ៏សំខាន់សម្រាប់សិស្សខ្មែរ ដែលកំណត់លទ្ធភាពក្នុងការចូលរៀននៅសាកលវិទ្យាល័យ។",
      image:
        "https://pppenglish.sgp1.digitaloceanspaces.com/image/main/field/image/topic-9.-2nd-day-of-bacii-exam-2019-at-boung-trobek-high-school-on-august-20-by-hean-rangsey-1.jpg?height=200&width=600&text=Bac+II+Exam",
    },
    {
      nameEn: "Visak Bochea",
      nameKh: "ពិធីបុណ្យវិសាខបូជា",
      date: "2025-05-11",
      funFactEn:
        "Visak Bochea commemorates the birth, enlightenment, and death of Buddha, which all occurred on the same date in different years.",
      funFactKh:
        "ពិធីបុណ្យវិសាខបូជាគឺជាការរំឭកដល់ថ្ងៃប្រសូត្រ ត្រាស់ដឹង និងបរិនិព្វានរបស់ព្រះពុទ្ធ ដែលបានកើតឡើងនៅថ្ងៃដូចគ្នាក្នុងឆ្នាំផ្សេងៗគ្នា។",
      image:
        "https://scontent.fpnh2-1.fna.fbcdn.net/v/t39.30808-6/280445723_10160770248125676_7931910641505046942_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF5hXBAb2V-ccF2mxPc9tcTHmwSXifVin4ebBJeJ9WKfhh_OIuri1TydlLMJudfErpg2weyl3i4d-IxtajgPQeV&_nc_ohc=t7ZnwsjJB0oQ7kNvwFl4Y0P&_nc_oc=Adn1ZUUFRgDq4-dP9akYpVV7bw1X2HyYJmO0dVFECy4gAmIvyP-Jz9cEhAURPxHVJUs&_nc_zt=23&_nc_ht=scontent.fpnh2-1.fna&_nc_gid=UXXQZLJXNDOyp43nNHTSWQ&oh=00_AfHEoR12mgyXHGDW5uYuGO-Q2F_IrdA8lVPMGrJrX9-ILg&oe=680E46EC",
    },
    {
      nameEn: "Diploma Exam (Grade 9)",
      nameKh: "ការប្រឡងសញ្ញាបត្របឋមសិក្សាទុតិយភូមិ",
      date: "2025-06-15",
      funFactEn:
        "The Grade 9 Diploma Exam marks the completion of lower secondary education in Cambodia.",
      funFactKh:
        "ការប្រឡងសញ្ញាបត្របឋមសិក្សាទុតិយភូមិគឺជាការបញ្ចប់ការសិក្សាថ្នាក់មធ្យមសិក្សាបឋមភូមិនៅកម្ពុជា។",
      image:
        "https://education.ams.com.kh/wp-content/uploads/2022/12/Ba_02-1.jpg",
    },
  ];

  let currentEventIndex = 0;
  let isKhmer = true;

  const khmerNumerals = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];

  function toKhmerNumeral(num) {
    return num
      .toString()
      .split("")
      .map((digit) => khmerNumerals[parseInt(digit)])
      .join("");
  }

  function updateCountdown() {
    const currentEvent = events[currentEventIndex];
    const eventDate = new Date(currentEvent.date);
    const now = new Date();
    const difference = eventDate - now;
    const totalDuration =
      eventDate -
      new Date(
        events[(currentEventIndex - 1 + events.length) % events.length].date
      );

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("eventName").textContent = isKhmer
      ? currentEvent.nameKh
      : currentEvent.nameEn;
    document.getElementById("eventDate").textContent =
      eventDate.toLocaleDateString(isKhmer ? "km-KH" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

    document.getElementById("days").textContent = isKhmer
      ? toKhmerNumeral(days)
      : days;
    document.getElementById("hours").textContent = isKhmer
      ? toKhmerNumeral(hours)
      : hours;
    document.getElementById("minutes").textContent = isKhmer
      ? toKhmerNumeral(minutes)
      : minutes;
    document.getElementById("seconds").textContent = isKhmer
      ? toKhmerNumeral(seconds)
      : seconds;

    // Update progress bar
    const progress = 100 - (difference / totalDuration) * 100;
    document.getElementById("progress").style.width = `${progress}%`;

    // Update fun fact
    document.getElementById("funFact").textContent = isKhmer
      ? currentEvent.funFactKh
      : currentEvent.funFactEn;

    // Update event image
    document.getElementById("eventImage").src = currentEvent.image;
    document.getElementById("eventImage").alt = isKhmer
      ? currentEvent.nameKh
      : currentEvent.nameEn;
  }

  function changeEvent(direction) {
    currentEventIndex =
      (currentEventIndex + direction + events.length) % events.length;
    updateCountdown();
  }

  function toggleLanguage() {
    isKhmer = !isKhmer;
    updateUI();
    updateCountdown();
  }

  function updateUI() {
    document
      .querySelector("html")
      .setAttribute("lang", isKhmer ? "km" : "en");
    document.getElementById("mainTitle").textContent = isKhmer
      ? "រាប់ថយក្រោយព្រឹត្តិការណ៍ខ្មែរ"
      : "Khmer Event Countdown";
    document.getElementById("prevEvent").textContent = isKhmer
      ? "← មុន"
      : "← Previous";
    document.getElementById("nextEvent").textContent = isKhmer
      ? "បន្ទាប់ →"
      : "Next →";
    document.getElementById("toggleLang").textContent = isKhmer
      ? "ប្ដូរភាសា / Switch Language"
      : "Switch Language / ប្ដូរភាសា";
    document.getElementById("copyright").textContent = isKhmer
      ? "© ២០២៤ រាប់ថយក្រោយខ្មែរ។ រក្សាសិទ្ធិគ្រប់យ៉ាង។"
      : "© 2024 Khmer Countdown. All rights reserved.";

    document.getElementById("daysLabel").textContent = isKhmer
      ? "ថ្ងៃ"
      : "Days";
    document.getElementById("hoursLabel").textContent = isKhmer
      ? "ម៉ោង"
      : "Hours";
    document.getElementById("minutesLabel").textContent = isKhmer
      ? "នាទី"
      : "Minutes";
    document.getElementById("secondsLabel").textContent = isKhmer
      ? "វិនាទី"
      : "Seconds";

    document.getElementById("followUs").textContent = isKhmer
      ? "តាមដានយើងនៅលើបណ្តាញសង្គម"
      : "Follow us on social media";
  }

  function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      `Check out the countdown for ${events[currentEventIndex].nameEn}!`
    );
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`,
      "_blank"
    );
  }

  function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      `Counting down to ${events[currentEventIndex].nameEn}! Check it out:`
    );
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      "_blank"
    );
  }

  document
    .getElementById("prevEvent")
    .addEventListener("click", () => changeEvent(-1));
  document
    .getElementById("nextEvent")
    .addEventListener("click", () => changeEvent(1));
  document
    .getElementById("toggleLang")
    .addEventListener("click", toggleLanguage);

  // Initialize particles.js
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });

  // Theme toggle functionality
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeToggle.textContent = document.body.classList.contains("dark-theme")
      ? "☀️"
      : "🌓";
  });

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Check for notifications permission and request if not granted
  if ("Notification" in window) {
    if (
      Notification.permission !== "granted" &&
      Notification.permission !== "denied"
    ) {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        }
      });
    }
  }

  // Set notification for 1 day before each event
  function setEventNotifications() {
    events.forEach((event) => {
      const eventDate = new Date(event.date);
      const notificationDate = new Date(
        eventDate.getTime() - 24 * 60 * 60 * 1000
      );
      const now = new Date();

      if (notificationDate > now) {
        const timeUntilNotification =
          notificationDate.getTime() - now.getTime();
        setTimeout(() => {
          if (Notification.permission === "granted") {
            new Notification(`Upcoming Event: ${event.nameEn}`, {
              body: `${event.nameEn} is tomorrow!`,
              icon: "/path/to/icon.png", // Add an appropriate icon path
            });
          }
        }, timeUntilNotification);
      }
    });
  }

  setEventNotifications();