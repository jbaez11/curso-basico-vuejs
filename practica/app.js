new Vue({
    el: "#app",
  
    data() {
      return {
        courses: [],
        title: "",
        time: 0,
      };
    },
  
    computed: {
      totalTime() {
        let timeT = 0;
        this.courses.forEach((course) => {
          timeT += parseInt(course.time);
        });
        return timeT;
      },
    },
  
    methods: {
      addCourse() {
        this.courses.push({ title: this.title, time: this.time });
        console.log({ title: this.title, time: this.time });
      },
    },
  });
  