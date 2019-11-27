<template>
	<div>
		<div class="container" id="rooms">
			<div class="row">
				<div class="col-md-9 white " id="left">
					<div class="col-content">
						<h3 class="text-left">#Black Spirits</h3>
						<hr />
						<input class="col-md-12 center-block" type="chat" id="chatbox" placeholder="">
					</div>
				</div>

				<div class="col-md-3 gray" id="right">
					<h5 style="margin-top: 10px; margin-bottom: 10%">인원 <small>- 3</small></h5>
					<div class="form-inline">
						<p><img :src="require(`@/assets/blackspirit.jpg`)" class="rounded-circle col-md-3" alt="Cinque Terre">흑정령</p>
						<p><img :src="require(`@/assets/blackspirit.jpg`)" class="rounded-circle col-md-3" alt="Cinque Terre">흑정령1</p>
						<p><img :src="require(`@/assets/blackspirit.jpg`)" class="rounded-circle col-md-3" alt="Cinque Terre">흑정령2</p>
					</div>
					<button type="button" class="col-md-11 center-block btn-lg" >나가기</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  props: {
    authState: {
      type: String,
      default: 'register'
      // login or register
    }
  },
  data () {
    return {
      step: 0
    }
  },
  methods: {
    nextStep () {
      this.step++
    },
    prevStep () {
      this.step--
    }
  }
}
</script>

<style lang="scss" scoped>
body {
    background-color: #E2F0D9;
}

@font-face { 
    font-family: 'KoPubDotumMedium'; 
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/KoPubDotumMedium.woff') format('woff'); 
    font-weight: normal; 
    font-style: normal; 
}

@media (max-width : 992px){
    .row .col-md-9.white input{
        width: 94%;
    }
}

@media (min-width : 992px) {
    body {
        margin-top: 10rem;
    }
    .row .col-md-9.white input{
        width: 96.5%;
    }
}

.row {
    font-family: 'KoPubDotumMedium'; 
    height: 40rem;
    box-shadow: rgb(112, 106, 112) 0px 0px 35px -2px;
}

.row .col-md-6 .col-content {
    text-align: center;
}

.row .col-md-9.white input{
    height: 50px;
    border-right: #8dcc75 2px solid;
    border-left: #8dcc75 2px solid;
    border-top: #8dcc75 2px solid;
    border-bottom: #8dcc75 2px solid;
    position:absolute; 
    bottom:0px;
    margin-bottom: 10px;
}

.row .col-md-3.gray{
    background-color: rgb(248,248,248);
}

.row .col-md-9.white {
    background-color: white;
}

.row .col-md-3#left { 
    padding-top: 3%;
    height: 40rem;
}

hr { 
    border-top:0.5px solid #8dcc75; 
    border-bottom:0.5px solid #8dcc75; 
}

.row .col-md-9.white .col-content h3{
    margin-top: 10px;
}
.row .col-md-3.gray button{
    background-color: rgb(248,248,248);
    position: absolute;
    bottom: 0px;
}

.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.row .col-md-3.gray button{
    bottom: 1.5%;
    background-color: #8dcc75;
    border-right: #8dcc75 2px solid;
    border-left: #8dcc75 2px solid;
    border-top: #8dcc75 2px solid;
    border-bottom: #8dcc75 2px solid;
}
.row .col-md-3.gray p{
    margin-top: -5%;
    margin-bottom: 10%;
}

</style>
