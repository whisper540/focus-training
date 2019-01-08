const Dialog = {
    Alert(data) {
        // if(!data) return;
        //设置内容
        this.panel = document.createElement('div');
        this.panel.classList.add('alert-panel');
        this.closeBtn = document.createElement('b');
        this.text = document.createTextNode("close");
    }
};

Dialog.Alert.prototype = {
    init() {
        let alertContainer = document.getElementById("app-alert");
        console.log(alertContainer);
        this.closeBtn.appendChild(this.text);
        this.panel.appendChild(this.closeBtn);
        alertContainer.appendChild(this.panel);
    }
};

export default Dialog;