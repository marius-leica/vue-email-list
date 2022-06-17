/*
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const app = new Vue({
  el: "#app",
  data: {
    listaMails: [],
  },
  methods: {
    checkMailsListLength() {
      if (this.listaMails.length === 10) {
        alert(
          "Read them carrefuly becouse in 5 secconds everithing will be deleted"
        );
      }
    },
    getRandomMail() {
      this.listaMails = [];
      const url = "https://flynn.boolean.careers/exercises/api/random/mail";

      for (let i = 0; i < 10; i++) {
        axios.get(url).then((axiosResp) => {
          this.listaMails.push(axiosResp.data.response);
          this.checkMailsListLength();
          console.log(axiosResp.data.response);
        });
      }
      setTimeout(() => {
        this.listaMails = [];
      }, 5000);
    },
  },
});
