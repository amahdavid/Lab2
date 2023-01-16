// event listener form that listens for a submit event
$(document).ready(function() {
	$('#chatbot-form').submit(function(event) {
		event.preventDefault();
		const message = $('#chatbot-input').val();
		$.ajax({
			type: 'POST',
			url: 'https://lab-2-amahnnachi-davidchika.onrender.com',
			data: {
				message: message
			},
			success: function(response) {
				$('#chatbot-response').text(response.text);

                // shows chat history
                /*let newMessage = $('<div>', {
                    class: 'message'
                }).text(response.text);
                let removeButton = $('<button>', {
                    class: 'remove-button'
                }).text('Remove');
                newMessage.append(removeButton);
                $('#chat-history').append(newMessage)*/;
			}
		});
	});
});

$(document).on('click', '.remove-button', function() {
	$(this).parent().remove();
});
