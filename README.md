# 1Password - Electron version

This thing won't work if you're not connected to the internet.

Requires `npm`.

To build and install, run:

```
npm install && npm run package-linux
sudo cp -r release-builds/1Password-linux-x64 /opt/ && sudo ln -s /opt/1Password-linux-x64/1Password /usr/local/bin/1Password
sudo desktop-file-install 1Password.desktop
sudo install -D assets/icons/png/16x16.png /usr/local/share/icons/hicolor/16x16/apps/1Password.png
sudo install -D assets/icons/png/32x32.png /usr/local/share/icons/hicolor/32x32/apps/1Password.png
sudo install -D assets/icons/png/64x64.png /usr/local/share/icons/hicolor/64x64/apps/1Password.png
sudo install -D assets/icons/png/128x128.png /usr/local/share/icons/hicolor/128x128/apps/1Password.png
sudo install -D assets/icons/png/256x256.png /usr/local/share/icons/hicolor/256x256/apps/1Password.png
sudo install -D assets/icons/png/512x512.png /usr/local/share/icons/hicolor/512x512/apps/1Password.png
sudo install -D assets/icons/png/1024x1024.png /usr/local/share/icons/hicolor/1024x1024/apps/1Password.png
```

To uninstall, run:

```
sudo rm -r /opt/1Password-linux-x64 \
/usr/local/bin/1Password \
/usr/local/share/applications/1Password.Desktop \
/usr/local/share/icons/hicolor/16x16/apps/1Password.png \
/usr/local/share/icons/hicolor/32x32/apps/1Password.png \
/usr/local/share/icons/hicolor/64x64/apps/1Password.png \
/usr/local/share/icons/hicolor/128x128/apps/1Password.png \
/usr/local/share/icons/hicolor/256x256/apps/1Password.png \
/usr/local/share/icons/hicolor/512x512/apps/1Password.png \
/usr/local/share/icons/hicolor/1024x1024/apps/1Password.png
```
