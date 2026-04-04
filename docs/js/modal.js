<div id="startup-modal" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; border: 1px solid #ccc; box-shadow: 0 2px 10px rgba(0,0,0,0.1); padding: 20px; z-index: 1000;">
    <h2>Welcome to My Portfolio!</h2>
    <p>This is an introduction to my latest work. Click below to explore!</p>
    <button id="view-new-portfolio">View New Portfolio</button>
    <button id="close-modal">Close</button>
</div>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Show modal only once per session
        if (!sessionStorage.getItem('modalShown')) {
            document.getElementById('startup-modal').style.display = 'block';
            sessionStorage.setItem('modalShown', 'true');
        }

        // Close button functionality
        document.getElementById('close-modal').onclick = function() {
            document.getElementById('startup-modal').style.display = 'none';
        };

        // View new portfolio button functionality
        document.getElementById('view-new-portfolio').onclick = function() {
            window.open('URL_TO_NEW_PORTFOLIO', '_blank');
        };
    });
</script>