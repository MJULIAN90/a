const messageAlert = (text) =>{
    Swal.fire({
        title: "Congratulations",
        text: `${text}.`,
        icon: "success",
        confirmButtonColor: "blue",
    });
}

