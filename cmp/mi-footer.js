class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Meza Castro Jazmin Ivonne`;
  }
}
customElements.define("mi-footer", MiFooter);
