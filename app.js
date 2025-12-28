<script>
const analyzeBtn = document.getElementById("analyzeBtn");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

analyzeBtn.onclick = () => {
  loading.style.display = "block";
  result.style.display = "none";

  setTimeout(() => {
    loading.style.display = "none";
    result.style.display = "block";
  }, 2500);
};

function reset() {
  result.style.display = "none";
}
</script>
