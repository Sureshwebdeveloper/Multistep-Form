const submitForm = document.getElementById("form-submission");
// Box -1
const box_1 = document.getElementById("box-one");
const inputname = document.getElementById("name");
const inputemail = document.getElementById("email");
const btn_1 = document.getElementById("first-btn");

// Box-2
const box_2 = document.getElementById("box-two");
const topics = document.querySelectorAll("#topics");
const topic_1 = document.getElementById("topic-1");
const topic_2 = document.getElementById("topic-2");
const topic_3 = document.getElementById("topic-3");
const btn_2 = document.getElementById("second-btn");

// Box-3
const box_3 = document.getElementById("box-three");
const output_email = document.getElementById("output-display-email");
const output_name = document.getElementById("output-display-name");
const btn_3 = document.getElementById("third-btn");

console.dir(output_name);
console.log(output_email);

submitForm.addEventListener("click", (e) => {
  e.preventDefault();
});

btn_1.addEventListener("click", () => {
  validateEmail();
});

function validateEmail() {
  const name = inputname.value;
  const email = inputemail.value;
  if (inputname.value.trim() == "") {
    alert("Please Enter Value and Click Continue");
    location.reload();
  } else if (
    inputname.value.trim().length < 3 ||
    inputname.value.trim().length > 15 
  ) {
    alert("Name Must Be min 3 and max 15 charcters & Enter Only Sting");
    location.reload();
    localStorage.clear();
  } else {
    if (
      !inputemail.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      alert("Please enter a valid Email");
      location.reload();
      localStorage.clear();
    } else {
      localStorage.setItem("username", name);
      localStorage.setItem("useremail", email);
      box_1.classList.add("hidden");
      box_2.classList.add("block");
    }
  }
}

// btn 2
btn_2.addEventListener("click", () => {
  box_2.classList.remove("block");
  box_3.classList.add("block");
  setLocalData();
  wholetopics();
});

// localStorage setup
function setLocalData() {
  output_name.innerText = localStorage.getItem("username");
  output_email.innerText = localStorage.getItem("useremail");
  topics.innterText = localStorage.getItem("option-1");
}

// listitems for topics
function wholetopics() {
  const wholetopic = document.querySelector("#wholetopic");

  const array = [1, 2, 3];
  for (let index = 0; index <= array.length; index++) {
    const li = document.createElement("li");
    li.style.marginLeft = "30px";
    li.innerText = localStorage.getItem(`option-${index}`);
    if (li.innerText === "") {
      li.remove();
    } else {
      wholetopic.appendChild(li);
    }
  }
}

topic_1.addEventListener("click", () => {
  topic_1.classList.toggle("add-color");
});

topic_2.addEventListener("click", () => {
  topic_2.classList.toggle("add-color");
});

topic_3.addEventListener("click", () => {
  topic_3.classList.toggle("add-color");
});

function getData1(e) {
  const data_1 = e.getAttribute("data-1");
  let storedata_1 = localStorage.setItem("option-1", data_1);
  return storedata_1;
}

function getData2(e) {
  const data_2 = e.getAttribute("data-2");
  let storedata_2 = localStorage.setItem("option-2", data_2);
  return storedata_2;
}

function getData3(e) {
  const data_3 = e.getAttribute("data-3");
  let storedata_3 = localStorage.setItem("option-3", data_3);
  return storedata_3;
}

// btn -3
btn_3.addEventListener("click", () => {
  const notification = alert("✅ Succes");
  box_3.classList.remove("block");
  box_1.classList.remove("hidden");
  setTimeout(() => {
    notification.close();
  }, 2000);
  localStorage.clear();
  location.reload();
});
