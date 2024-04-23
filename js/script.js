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

submitForm.addEventListener("click", (e) => {
  e.preventDefault();
});

btn_1.addEventListener("click", () => {
  const name = inputname.value;
  const email = inputemail.value;

  if (name.length < 3  ) {
    alert("Please Enter Valid Name And Email");
  } else {
    const dataName = localStorage.setItem("username", name);
    const dataEmail = localStorage.setItem("useremail", email);
    box_1.classList.add("hidden");
    box_2.classList.add("block");
  }
});

// btn 2
btn_2.addEventListener("click", () => {
  box_2.classList.remove("block");
  box_3.classList.add("block");
});

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

// localStorage setup
function setLocalData() {
  const getname = localStorage.getItem("userename");
  const getemail = localStorage.getItem("usereemail");
  output_email.innerText=(getemail);
  output_name.innerText=(getname);
}

// btn -3
btn_3.addEventListener("click", () => {
  setLocalData();
  const notification = alert("✅ Succes");
  box_3.classList.remove("block");
  box_1.classList.remove("hidden");
  setTimeout(() => {
    notification.close();
  }, 2000);
  localStorage.clear();
  location.reload();
});
// box_1.addEventListener("click", (e) => {
//   e.preventDefault();
//   validateinputs();
// });

function validateinputs() {
  const usernameValue = inputname.value.trim();
  const useremailValue = inputemail.value.trim();
}

function setError(element, message) {
  const inputParent = element.parentElement;
  const errorElement = inputParent.querySelector(".error");

  errorElement.innterText = message;
  inputParent.classList.add("error");
  box_2.classList.add("hidden");
  box_3.classList.add("hidden");
}

const validateEmail = () => {
  if (
    !emailInput.value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return alert("Please enter a valid Email");
  }
};
