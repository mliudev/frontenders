// globals
const root = document.body;
let count = 0;

// views
const Hello = {
  view: function () {
    return m("main", [
      m("h1", { class: "title" }, "My first app"),
      m(
        "button",
        {
          onclick: getTask,
        },
        count + " clicks"
      ),
    ]);
  },
};

const Splash = {
  view: function () {
    return m("a", { href: "#!/hello" }, "Enter!");
  },
};

// routing
m.route(root, "/splash", {
  "/splash": Splash,
  "/hello": Hello,
});

// XHR
const apiToken: string = "<api_token>";

const getTask = function () {
  m.request({
    method: "GET",
    url: "http://localhost:3000/employee_x_task",
    headers: {
      Authorization: "Bearer " + apiToken,
    },
  })
    .then(function (data) {
      console.log("Tasks are: ");
      console.log(data);
    })
    .catch(function (e) {
      console.error(e.message);
    });
};
