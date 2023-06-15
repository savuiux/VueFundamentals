const landing = Vue.createApp({
    data() {
        return {
            message: "Sample with Arguments",
            location: "top",
            locationFooter: "bottom",
            locationPosition: 0,
            cards: [
                {
                    title: "Vue",
                    description: "Complete component-based User Interface framework. Includes most core features, but more common for startups than big companies.",
                    link: {
                        url: "https://vuejs.org",
                        image: "https://vuejs.org/images/logo.png"
                    }
                },
                {
                    title: "React",
                    description: "Lean, component-based User Interface framework. Developed by Facebook and you need to download some packages to add features.",
                    link: {
                        url: "https://reactjs.org",
                        image: "https://toppng.com/uploads/preview/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994zqcpwozsvy.png"
                    }
                },
                {
                    title: "Angular",
                    description: "Complete component-based User Interface framework. Includes huge library of features for large projects. Requires TypeScript to function.",
                    link: {
                        url: "https://angular.io",
                        image: "https://e7.pngegg.com/pngimages/526/279/png-clipart-logo-cyberpower-smart-app-sinewave-pr1500lcd-cyberpower-csb6012-surge-protector-6-outlets-12-ft-cord-1200-joules-design-ups-design-angle-text-thumbnail.png"
                    }
                }
            ]
        }
    }
})

landing.directive("focus", {
    mounted(el) {
        el.focus()
    }
})

landing.directive("arguments", {
    mounted(el, binding) {
        el.innerHTML = "value: " + JSON.stringify(binding.value) + "<br />Argument:" + JSON.stringify(binding.arg) + "<br />Modifiers:" +  JSON.stringify(binding.modifiers)
    }
})

landing.directive("stick-element", {
    mounted(el, binding) {
        const location = binding.arg || "top"
        el.style.position = "fixed"
        el.style[location] = binding.value + 'px'
    }
})

landing.directive("reposition-element", {
    mounted(el, binding) {
        const location = binding.arg || "bottom"
        el.style.position = "fixed"
        el.style[location] = binding.value + 'px'
    },
    updated(el, binding) {
        const updatedLocation = binding.arg || "bottom"
        el.style[updatedLocation] = binding.value + 'vh'
    }
})