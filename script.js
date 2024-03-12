$(document).ready(function() {
    $("#btnAdd").click(function(event) {
        var title = $("#input-field").val();
        var content = $("#txt_content").val();

        event.preventDefault();

        var newCard = `
            <div class="row mt-4">
                <div class="col-md-12">
                    <div class="card mt-4">
                        <div class="card-header">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input me-2 todo-checkbox">
                                <label class="form-check-label">${title}</label>
                            </div>
                        </div>
                        <div class="card-body">
                            <p>${content}</p>
                            <button class="btn-delete btn btn-danger float-end"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        $(".container").append(newCard);

        // Clear input fields after adding a to-do item
        $("#input-field").val('');
        $("#txt_content").val('');
    });

    $("#btnAdd").mousedown(function() {
        $(this).css('background-color', '#fc7ca5');
    });

    $("#btnAdd").mouseup(function() {
        $(this).css('background-color', '');
    });

    $(".container").on("click", ".btn-delete", function() {
        $(this).closest(".card").parent().parent().remove();
    });

    $(".container").on("change", ".todo-checkbox", function() {
        var isChecked = $(this).prop('checked');
        var labelElement = $(this).next('.form-check-label');
        if (isChecked) {
            labelElement.css('text-decoration', 'line-through');
        } else {
            labelElement.css('text-decoration', 'none');
        }
    });
});
