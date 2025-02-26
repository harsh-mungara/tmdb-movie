
case "$ENV" in
     "dev")
     echo "Switching to Firebase dev environment."
     yes | cp -rf "firebase/dev/google-services.json" android/app
     yes | cp -rf "firebase/dev/GoogleService-Info.plist" ios
     yes | cp -rf ".env.dev" ".env"
esac