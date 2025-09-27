# Just Dance Clone

A simplified "Just Dance" game built with Next.js, TypeScript, and TensorFlow.js. Upload a dance video and dance along with real-time pose detection and scoring!

## 🎯 Features

### Core Functionality
- **Video Upload**: Upload any MP4, MOV, or other video format
- **Frame-by-Frame Processing**: Extract poses from uploaded video using TensorFlow.js
- **Real-time Pose Detection**: Track your movements using webcam
- **Live Scoring**: Compare your poses with reference video in real-time
- **Performance Summary**: Get detailed scorecard at the end

### Technical Features
- **Client-side Processing**: All pose detection runs in the browser
- **30 FPS Performance**: Optimized for smooth real-time detection
- **Skeleton Visualization**: See your pose overlaid on video
- **Per-joint Scoring**: Individual scoring for each body part
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Modern web browser with WebRTC support
- Webcam access

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd just-dance-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎮 How to Play

1. **Upload a Video**
   - Click the upload area and select a dance video
   - Wait for the video to be processed (poses extracted)

2. **Start Dancing**
   - Click "Start Dancing!" to begin
   - Allow webcam access when prompted
   - Follow the reference video movements

3. **Get Feedback**
   - Watch your real-time score (0-100%)
   - See skeleton overlays on both videos
   - Per-joint scoring shows which body parts match well

4. **View Results**
   - Get a detailed performance summary at the end
   - See your overall grade and consistency score

## 🛠️ Technical Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework

### Pose Detection
- **TensorFlow.js** - Machine learning in the browser
- **@tensorflow-models/pose-detection** - Pose detection models
- **MoveNet** - Lightweight, real-time pose detection

### Key Components
- `app/page.tsx` - Main UI and game logic
- `lib/poseUtils.ts` - Pose similarity calculations and utilities
- `components/SkeletonCanvas.tsx` - Skeleton visualization
- `hooks/usePoseDetector.ts` - Pose detection hook
- `hooks/useVideoProcessor.ts` - Video processing hook

## 🎨 UI Features

### Design
- **Gradient Backgrounds** - Modern purple-to-blue gradients
- **Glassmorphism Effects** - Semi-transparent overlays
- **Smooth Animations** - Tailwind CSS transitions
- **Responsive Layout** - Works on all screen sizes

### Visual Feedback
- **Real-time Score Overlay** - Shows current performance
- **Skeleton Visualization** - Color-coded joint scoring
- **Progress Bar** - Shows video playback progress
- **Performance Summary** - Detailed end-game statistics

## 🔧 Configuration

### Pose Detection Settings
```typescript
// In usePoseDetector.ts
const poseDetector = await createDetector(SupportedModels.MoveNet, {
  modelType: 'SinglePose.Lightning', // Fast, accurate
  enableSmoothing: true, // Reduce jitter
});
```

### Scoring Parameters
```typescript
// In poseUtils.ts
const confidenceThreshold = 0.3; // Minimum keypoint confidence
const similarityWeights = {
  cosine: 0.6,    // Cosine similarity weight
  distance: 0.4   // Distance-based weight
};
```

## 🚀 Performance Optimization

### 30 FPS Target
- **RequestAnimationFrame** - Smooth game loop
- **WebGL Backend** - GPU acceleration for TensorFlow.js
- **Efficient Pose Detection** - Optimized MoveNet model
- **Canvas Optimization** - Hardware-accelerated rendering

### Memory Management
- **Automatic Cleanup** - Dispose of TensorFlow.js resources
- **URL Revocation** - Clean up video object URLs
- **Frame Skipping** - Process every 2nd frame if needed

## 🎯 Scoring System

### Real-time Scoring
- **Cosine Similarity** - Measures pose direction similarity
- **Euclidean Distance** - Measures keypoint position accuracy
- **Per-joint Scoring** - Individual body part evaluation
- **Confidence Weighting** - Only score high-confidence keypoints

### Performance Metrics
- **Overall Score** - Average similarity across all frames
- **Consistency** - How stable your performance was
- **Best Score** - Your highest single-frame score
- **Grade** - A+ to F based on overall performance

## 🐛 Troubleshooting

### Common Issues
- **Webcam not working**: Check browser permissions
- **Pose detection slow**: Ensure good lighting
- **Video not processing**: Try different video formats
- **Low FPS**: Close other browser tabs

### Browser Compatibility
- **Chrome/Edge**: Full support
- **Firefox**: Good support
- **Safari**: Limited support (iOS 14.3+)
- **Mobile**: Works on modern mobile browsers

## 🎉 Demo Tips

### For Best Results
- Use well-lit environment
- Position webcam at chest height
- Choose videos with clear dance movements
- Ensure stable internet connection

### Performance
- Close unnecessary browser tabs
- Use Chrome for best performance
- Ensure webcam is not being used by other apps

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **TensorFlow.js** team for pose detection models
- **Next.js** team for the excellent React framework
- **Just Dance** for inspiration
- **Open source community** for amazing tools

---

**Ready to dance? Let's go! 🕺💃**