import NProgress from 'nprogress'

export function setupNProgress() {
  NProgress.configure({ easing: 'ease', speed: 500 /* showSpinner: false */ })
  window.NProgress = NProgress
}
