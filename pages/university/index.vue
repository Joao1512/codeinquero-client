<template>
  <div>
    <div>
      {{ universityName }}
    </div>
    <div>
      {{ studentCount }}
    </div>
    <div>
      <button>Nova Vaga</button>
      <button>Nova Vaga</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      universityName: "Universidade",
      studentCount: 10
    };
  }
};
</script>

<style></style>
