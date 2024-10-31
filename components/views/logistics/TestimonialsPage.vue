<template>
  <div id="testimonialsPage">
    <div class="testimonial-container">
      <div class="video-wrapper">
        <video src="/aboutus/box2box_video.mp4" controls alt="Customer Testimonial" class="testimonial-video"></video>
      </div>
      <div class="testimonial-text">
        <h2>Wetacoo Customer Testimonials</h2>
        <p>
          More and more companies are relying on Wetacoo's warehouse. Discover some of their stories.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialsPage',
};
</script>

<style scoped>
#testimonialsPage {
  padding: 40px;
  background-color: #f9f9f9;
  width: 100%;
  margin: 0;
}
.testimonial-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin: 0 8%; /* Add 15% margin on the left and right */
}
.video-wrapper {
  flex: 1 1 45%;
  width: 100%;
}
.testimonial-video {
  width: 90%;
  border-radius: 30px;
}
.testimonial-text {
  flex: 1 1 45%;
}
.testimonial-text h2 {
  font-size: 32px;
  margin-bottom: 15px;
}
.testimonial-text p {
  font-size: 18px;
  color: #555;
}
</style>
