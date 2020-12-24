<template>
  <div class="content">
    <div class="card summary-courses">
      <p className="header-summary">Our courses</p>
      <p className="detail-summary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <div className="list-image">
        <img v-for="(image, index) in images" :key="index" :src="image" />
      </div>
    </div>

    <div class="card courses">
      <div class="item" v-for="course in courses" :key="course.id">
        <div class="image-content">
          <img :src="course.image" />
        </div>
        <div class="text-content">
          <h1>{{ course.header }}</h1>
          <p>{{ course.content }}</p>
        </div>
      </div>

      <div class="pagination">
        <ul>
          <img class="arrow" :src="arrow_left" @click="previousPage()" />
          <li
            v-for="(page, index) in pages"
            :class="{ active: isCurrentPage(page) }"
            :key="index"
          >
            {{ page }}
          </li>
          <img class="arrow" :src="arrow_right" @click="nextPage()" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Courses",
  data() {
    return {
      images: Array(6)
        .fill()
        .map((val, index) => require(`@/assets/img_${index + 1}.png`)),
      courses: Array(6)
        .fill()
        .map((val, index) => {
          return {
            id: index,
            image: require("@/assets/img_empty.png"),
            header: "Sed ut perspiciatis unde omnis",
            content:
              "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
          };
        }),
      arrow_left: require("@/assets/arrow_left.png"),
      arrow_right: require("@/assets/arrow_right.png"),
      pages: Array(10)
        .fill()
        .map((val, index) => index + 1),
      current_page: 1,
    };
  },
  methods: {
    isCurrentPage(page) {
      return this.current_page === page;
    },
    nextPage() {
      if (this.current_page < 10) this.current_page++;
    },
    previousPage() {
      if (this.current_page > 1) this.current_page--;
    },
  },
};
</script>