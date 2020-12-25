<template>
  <div class="content">
    <div class="card summary-courses">
      <p className="header-summary">{{ header }}</p>
      <p className="detail-summary">{{ detail }}</p>
      <div className="list-image">
        <img v-for="(image, index) in images" :key="index" :src="image" />
      </div>
    </div>

    <div class="card courses">
      <div class="item" v-for="(course, index) in courses" :key="index">
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
            :key="index"
            :class="{ active: isCurrentPage(page) }"
            @click="gotoPage(page)"
          >
            {{ page }}
          </li>
          <img class="arrow" :src="arrow_right" @click="nextPage()" />
        </ul>
      </div>
    </div>

    <div class="card carousel">
      <div
        :class="['hide-image', { active: isCurrentCarousel(index) }]"
        v-for="(carousel, index) in carousels"
        :key="index"
      >
        <img :src="carousel.image" />
        <p class="detail-img">{{ carousel.detail }}</p>
      </div>
      <ul>
        <li
          v-for="(carousel, index) in carousels"
          :key="index"
          :class="{ selected: isCurrentCarousel(index) }"
          @click="gotoCarousel(index)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Courses",
  data() {
    return {
      header: "Our courses",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      images: Array(6)
        .fill()
        .map((_, i) => require(`@/assets/img_${i + 1}.png`)),
      courses: Array(6)
        .fill()
        .map(() => {
          return {
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
        .map((_, i) => i + 1),
      current_page: 1,
      carousels: [
        {
          image: require("@/assets/img_carousel_1.png"),
          detail: "Everything we do now for your future.",
        },
        {
          image: require("@/assets/img_carousel_2.png"),
          detail: "Nemo enim ipsam voluptatem quia voluptas.",
        },
        {
          image: require("@/assets/img_carousel_3.png"),
          detail:
            "sed quia consequuntur magni dolores eos qui ratione.",
        },
        {
          image: require("@/assets/img_carousel_4.png"),
          detail: "The largest community of photo enthusiasts",
        },
      ],
      current_carousel_index: 3,
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
    gotoPage(page) {
      this.current_page = page;
    },
    isCurrentCarousel(index) {
      return this.current_carousel_index === index;
    },
    gotoCarousel(index) {
      this.current_carousel_index = index;
    },
  },
};
</script>
