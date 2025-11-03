<template>
    <div class="box">
        <div class="word">
            Guys,<br>Nice to meet U
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.box {
    width: 100%;
    max-height: 80vh;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.word {
    line-height: 130px;
    font-size: 130px;
    color: #2528bd;
    margin: 0;
    text-align: center;
    font-family: system-ui;
    font-weight: 900;
}
@media only screen and (max-width: 600px) {
    .word {
        font-size: 90px;
        line-height: 90px;
    }
}
.VPFooter {
    border: 0 !important;
}
</style>
