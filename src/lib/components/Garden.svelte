<script>
    // @ts-nocheck

    import "../../app.css";
    // Test items for the garden
    let items = [
        { id: 1, src: "/assets/images/tree.png", x: 200, y: 100 },
        { id: 2, src: "/assets/images/flower.png", x: 400, y: 300 },
    ];

    let width = 10000;
    let heigth = 10000;
    let offsetX = -width / 2 + 170; // Center horizontally (half of 10000px width - half of 340px container width)
    let offsetY = -width / 2 + 200;
    let isPanning = false; // Flag to check if panning is active
    let startX = 0; // Initialize X position
    let startY = 0; // Initialize Y position

    // Handle mouse down or touch start
    const startPan = (event) => {
        isPanning = true;
        startX =
            event.type === "mousedown"
                ? event.clientX
                : event.touches[0].clientX;
        startY =
            event.type === "mousedown"
                ? event.clientY
                : event.touches[0].clientY;
    };

    // Handle mouse move or touch move
    const pan = (event) => {
        if (!isPanning) return;

        const currentX =
            event.type === "mousemove"
                ? event.clientX
                : event.touches[0].clientX;
        const currentY =
            event.type === "mousemove"
                ? event.clientY
                : event.touches[0].clientY;

        const deltaX = currentX - startX;
        const deltaY = currentY - startY;

        offsetX += deltaX;
        offsetY += deltaY;

        // Update the start position for the next move
        startX = currentX;
        startY = currentY;
    };

    // Stop panning
    const endPan = () => {
        isPanning = false;
    };
</script>

<div
    class="relative w-[340px] h-[400px] overflow-hidden border border-gray-300 rounded-2xl touch-none"
    on:mousedown|preventDefault={startPan}
    on:mousemove={pan}
    on:mouseup={endPan}
    on:mouseleave={endPan}
    on:touchstart|preventDefault={startPan}
    on:touchmove={pan}
    on:touchend={endPan}
>
    <div
        class="absolute w-[10000px] h-[10000px] bg-cover bg-repeat"
        style="background-image: url('/assets/images/Green.jpg'); transform: translate({offsetX}px, {offsetY}px);"
    >
        <!-- Items in the garden -->
        {#each items as item (item.id)}
            <img
                src={item.src}
                alt="Garden Element"
                class="absolute w-[50px] h-[50px]"
                style="top: {item.y}px; left: {item.x}px;"
            />
        {/each}
    </div>
</div>
