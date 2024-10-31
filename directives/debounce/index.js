import debounce from "./debounce";

function directive(el, binding) {
  if (binding.value && binding.value !== binding.oldValue) {
    // change debounce only if interval has changed
    el.oninput = directive.debounce(() => {
      el.dispatchEvent(new Event("change"));
    }, Number(binding.value) || 500);
  }
}

directive.debounce = debounce;

export default directive;
