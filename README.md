<!-- independent-distribution -->
# Libra for Android

Weighted pros and cons for decisions. This independently signed edition builds the [original 1.13.2 release](https://github.com/markusfisch/Libra/tree/97648460e4efe3816589fea3bfbb5e34c22cad24) from source. The upstream name, license and application features are preserved.

[Download APK and AAB](https://github.com/hamzabounibanedz/libra-decisions-android/releases/latest) · [Cloud build and emulator results](https://github.com/hamzabounibanedz/libra-decisions-android/actions/workflows/distribution.yml)

![Scan for the Android installation page](distribution/install-qr.png)

Download the APK on your phone and open it. Android may ask you to allow the download source to install apps. This edition uses its own Android package ID, `io.github.hamzabounibanedz.libra`, and signing certificate. It can be installed alongside the original app. GitHub Actions assigns an increasing Android version code to each new build.

Run **Actions → Build, test and release Android → Run workflow** to compile, sign, install and test on a hosted Android emulator, and publish a new release. The release includes the APK, AAB, SHA-256 checksums, installation QR and device evidence. Repository signing secrets are ANDROID_KEYSTORE and ANDROID_KEYPASS. No backend or login is required.

## Upstream documentation

# Decisions

Android app that helps making decisions. Works like this:

1. Write down pros and cons
2. Weigh arguments from 1 to 10
3. Get a recommendation

Inspired by this [Time article][trick-for-decisions].

If you find this app useful and wish to support its continued development,
you can [buy me a coffee](https://www.buymeacoffee.com/markusfisch) or
send some Bitcoin decimals to `bc1q2guk2rpll587aymrfadkdtpq32448x5khk5j8z`.

<a href="https://www.buymeacoffee.com/markusfisch" target="_blank"><img
	src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
	alt="Buy Me A Coffee"
	style="height: 60px !important;width: 217px !important;"/></a>&nbsp;<a
	href="https://liberapay.com/markusfisch/" target="_blank"><img
	src="https://liberapay.com/assets/widgets/donate.svg"
	alt="Liberapay"
	style="height: 60px !important"/></a>&nbsp;<a
	href="https://ko-fi.com/markusfisch" target="_blank"><img
	src="https://storage.ko-fi.com/cdn/brandasset/kofi_s_tag_dark.png"
	alt="Ko-fi"
	style="height: 60px !important"/></a>

## Screenshots

<img src="fastlane/metadata/android/en-US/images/phoneScreenshots/screencap-arguments-light.png"
	alt="Screenshot Arguments Light Theme" width="160"/>
<img src="fastlane/metadata/android/en-US/images/phoneScreenshots/screencap-issues-light.png"
	alt="Screenshot Issues Light Theme" width="160"/>
<img src="fastlane/metadata/android/en-US/images/phoneScreenshots/screencap-arguments-dark.png"
	alt="Screenshot Arguments Dark Theme" width="160"/>
<img src="fastlane/metadata/android/en-US/images/phoneScreenshots/screencap-issues-dark.png"
	alt="Screenshot Issues Dark Theme" width="160"/>

## Download

[<img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png"
	alt="Get it on F-Droid"
	height="80">](https://f-droid.org/packages/de.markusfisch.android.libra/)
[<img src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"
	alt="Get it on Google Play"
	height="80">](https://play.google.com/store/apps/details?id=de.markusfisch.android.libra)

[trick-for-decisions]: http://time.com/3772262/billionaire-trick-for-decisions/
