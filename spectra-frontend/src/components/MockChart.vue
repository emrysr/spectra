<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Reactive reference to the canvas element
const canvasRef = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;

// Data generation
const numPoints = 200; // Increased number of data points
const data = ref<{ x: number; y: number }[]>([]); // Reactive data array

// Chart configuration constants
const padding = 50;
let chartWidth: number;
let chartHeight: number;
let xScale: number;
let yScale: number;

/**
 * Generates the data points for the signal.
 * Simulates a waveform-like pattern.
 */
const generateData = () => {
    const newData: { x: number; y: number }[] = [];
    for (let i = 0; i < numPoints; i++) {
        // Values oscillate between roughly 0 and 100
        const y = 50 + 45 * Math.sin(i * 0.15) + 20 * Math.cos(i * 0.3 + 1.2);
        newData.push({ x: i, y: Math.max(0, y) }); // Ensure y is not negative
    }
    data.value = newData; // Update reactive data
};

/**
 * Resizes the canvas and triggers a redraw of the chart.
 * This function is called on initial mount and window resize.
 */
const resizeCanvas = () => {
    if (!canvasRef.value) return; // Exit if canvas not available

    // Set canvas dimensions based on its current offset dimensions (from CSS)
    canvasRef.value.width = canvasRef.value.offsetWidth;
    canvasRef.value.height = canvasRef.value.offsetHeight;

    chartWidth = canvasRef.value.width - 2 * padding;
    chartHeight = canvasRef.value.height - 2 * padding;

    // Determine scale factors based on data range and chart dimensions
    const maxX = Math.max(...data.value.map(point => point.x));
    const maxY = Math.max(...data.value.map(point => point.y));
    const minY = Math.min(...data.value.map(point => point.y));

    // Scale X based on the maximum X value, ensuring points fit
    xScale = chartWidth / (maxX);
    // Scale Y based on the full range (maxY - minY) with a buffer
    yScale = chartHeight / (maxY - minY + (maxY * 0.1));

    drawChart(); // Redraw chart after resizing
};

/**
 * Draws the line chart on the canvas.
 * Includes axes, labels, grid lines, and the signal line.
 */
const drawChart = () => {
    if (!ctx || !canvasRef.value) return; // Exit if context or canvas not available

    // Clear the entire canvas before drawing
    ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);

    // Set font and fill style for text
    ctx.font = '12px Inter';
    ctx.fillStyle = '#4a5568'; // Dark gray for text

    // Draw X and Y axes
    ctx.beginPath();
    ctx.strokeStyle = '#cbd5e0'; // Light gray for axes
    ctx.lineWidth = 1;

    // Y-axis line
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvasRef.value.height - padding);
    // X-axis line
    ctx.moveTo(padding, canvasRef.value.height - padding);
    ctx.lineTo(canvasRef.value.width - padding, canvasRef.value.height - padding);
    ctx.stroke(); // Render the axis lines

    // Draw Y-axis labels and horizontal grid lines
    const numYLabels = 5;
    const minYValue = Math.min(...data.value.map(point => point.y));
    const maxYValue = Math.max(...data.value.map(point => point.y));
    const yRange = maxYValue - minYValue;

    for (let i = 0; i <= numYLabels; i++) {
        // Calculate the Y value for each label, distributing evenly across the data range
        const yValue = minYValue + (yRange / numYLabels) * i;
        // Translate Y value to canvas pixel coordinate, accounting for minY offset
        const yPixel = canvasRef.value.height - padding - ((yValue - minYValue) * yScale);

        // Draw grid line
        ctx.beginPath();
        ctx.strokeStyle = '#edf2f7'; // Lighter gray for grid lines
        ctx.moveTo(padding, yPixel);
        ctx.lineTo(canvasRef.value.width - padding, yPixel);
        ctx.stroke();

        // Draw label text
        ctx.fillText(Math.round(yValue).toString(), padding - 30, yPixel + 4);
    }

    // Draw X-axis labels (a few selected points for clarity)
    const numXLabels = 10;
    const max_X = Math.max(...data.value.map(point => point.x));
    for (let i = 0; i <= numXLabels; i++) {
        const xValue = Math.round((max_X / numXLabels) * i);
        const xPixel = padding + (xValue * xScale);
        ctx.fillText(xValue.toString(), xPixel - 5, canvasRef.value.height - padding + 20);
    }

    // Draw the main line chart (the signal)
    ctx.beginPath();
    ctx.strokeStyle = '#4299e1'; // Blue color for the line
    ctx.lineWidth = 2; // Slightly thicker line for better visibility

    data.value.forEach((point, index) => {
        // Translate data coordinates to pixel coordinates
        const xPixel = padding + (point.x * xScale);
        const yPixel = canvasRef.value.height - padding - ((point.y - minYValue) * yScale);

        if (index === 0) {
            ctx.moveTo(xPixel, yPixel); // Start path at the first point
        } else {
            ctx.lineTo(xPixel, yPixel); // Draw line to subsequent points
        }
    });
    ctx.stroke(); // Render the line

    // Optionally draw small circles at each data point to mark them
    data.value.forEach((point) => {
        const xPixel = padding + (point.x * xScale);
        const yPixel = canvasRef.value.height - padding - ((point.y - minYValue) * yScale);
        ctx.beginPath();
        ctx.arc(xPixel, yPixel, 2, 0, Math.PI * 2, true); // Smaller circle radius (2px)
        ctx.fillStyle = '#4299e1'; // Blue for points
        ctx.fill(); // Fill the circle
        ctx.closePath();
    });
};

// Lifecycle Hook: Runs after the component is mounted (i.e., DOM is ready)
onMounted(() => {
    if (canvasRef.value) {
        ctx = canvasRef.value.getContext('2d'); // Get 2D rendering context
        generateData(); // Generate initial data
        resizeCanvas(); // Perform initial chart drawing
        window.addEventListener('resize', resizeCanvas); // Add resize listener
    }
});

// Lifecycle Hook: Runs before the component is unmounted (i.e., removed from DOM)
onUnmounted(() => {
    window.removeEventListener('resize', resizeCanvas); // Clean up resize listener
});
</script>

<template>
    <canvas ref="canvasRef"></canvas>
</template>

<style scoped>
canvas {
    background-color: #ffffff;
    /* White background for chart area */
    border: 1px solid #e2e8f0;
    /* Light border */
    border-radius: 0.75rem;
    /* Rounded corners */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    /* Subtle shadow */
    display: block;
    max-width: 90vw;
    /* Max width to fit most screens */
    max-height: 80vh;
    /* Max height to fit most screens */
    width: 100%;
    /* Fluid width */
    height: auto;
    /* Maintain aspect ratio */
}
</style>
