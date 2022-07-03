<template>
  <!-- 신청완료(홈) -->
  <div v-if="type === 'home'" class="apply-complete-wrap">
    <div class="text-grid-list">
      <div class="row">
        <strong>신청자</strong>
        <div>김김김</div>
      </div>
      <div class="row">
        <strong>휴대전화번호</strong>
        <div>010-0000-0000</div>
      </div>
      <div class="row">
        <strong>유선전화번호</strong>
        <div>02-0000-0000</div>
      </div>
      <div class="row">
        <strong>이메일</strong>
        <div>CHARGEV@CHARGEV.CO.KR</div>
      </div>
      <div class="row">
        <strong>주소</strong>
        <div>서울시 송파구 올림픽로 300</div>
      </div>
      <div class="row">
        <strong>신청수량</strong>
        <div>1</div>
      </div>
      <div class="row">
        <strong>요구사항</strong>
        <div>빨리 와주세요.</div>
      </div>
      <div class="row">
        <strong>설치신청모델</strong>
        <div>모델A</div>
      </div>
    </div>
    <div class="btn-wrap">
      <button class="btn-type1" @click="$emit('close');">완료</button>
    </div>
  </div>
  <div v-else class="apply-complete-wrap">
    <div class="text-grid-list">
      <div class="row">
        <strong>신청자</strong>
        <div>김김김</div>
      </div>
      <div class="row">
        <strong>휴대전화번호</strong>
        <div>010-0000-0000</div>
      </div>
      <div class="row">
        <strong>유선전화번호</strong>
        <div>02-0000-0000</div>
      </div>
      <div class="row">
        <strong>이메일</strong>
        <div>CHARGEV@CHARGEV.CO.KR</div>
      </div>
      <div class="row">
        <strong>주소</strong>
        <div>서울시 송파구 올림픽로 300</div>
      </div>
      <div class="row">
        <strong>주차면</strong>
        <div>100  </div>
      </div>
      <div class="row">
        <strong>최소필요댓수</strong>
        <div>2</div>
      </div>
      <div class="row">
        <strong>기존 수량</strong>
        <div>0</div>
      </div>
      <div class="row">
        <strong>설치 희망 수량</strong>
        <div>2</div>
      </div>
      <div class="row">
        <strong>요구사항</strong>
        <div>빨리 와주세요</div>
      </div>
    </div>
    <div class="btn-wrap">
      <button class="btn-type1" @click="$emit('close');">완료</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
  }, 
}
</script>
