const root = document.body;
let count = 0;

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

m.route(root, "/splash", {
  "/splash": Splash,
  "/hello": Hello,
});

const apiToken: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlbXBsb3llZV8yIn0.BIB6Uyzc__2rh9u6199pHJ5aYkwE3c7tFlWkkvmatEA";

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
