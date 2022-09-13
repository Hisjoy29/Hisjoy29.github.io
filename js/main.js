const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting)
    {
      entry.target.classList.add('fadeOut')
    }
    else
    {
      entry.target.classList.remove('fadeOut')
    }
  })
})

const fadeInDivs = document.querySelectorAll(".fadeIn")

fadeInDivs.forEach(fade => observer.observe(fade))

function call_to_groom()
{
  return document.location.href = "tel:010-8253-1206"
}

function call_to_bride()
{
  return document.location.href = "tel:010-3371-5003"
}

function call_to_groom_father()
{
  return document.location.href = "tel:010-2809-0317"
}

function call_to_groom_mother()
{
  return document.location.href = "tel:010-4408-1132"
}

function call_to_bride_father()
{
  return document.location.href = "tel:010-1234-5678"
}

function call_to_bride_mother()
{
  return document.location.href = "tel:010-1234-5678"
}

function message_to_groom()
{
  return document.location.href = "sms:010-8253-1206"
}

function message_to_bride()
{
  return document.location.href = "sms:010-3371-5003"
}

function copy_groom_account()
{
  const textarea = document.createElement("textarea")

  document.body.appendChild(textarea)

  textarea.value = "농협 394-02-265170 장한별"
  textarea.select()

  document.execCommand("copy")
  document.body.removeChild(textarea)

  return alert("복사되었습니다.")
}

function copy_bride_father_account()
{
  const textarea = document.createElement("textarea")

  document.body.appendChild(textarea)

  textarea.value = "우리은행 1002-543-161921 정교화"
  textarea.select()

  document.execCommand("copy")
  document.body.removeChild(textarea)

  return alert("복사되었습니다.")
}

function copy_bride_account()
{
  const textarea = document.createElement("textarea")

  document.body.appendChild(textarea)

  textarea.value = "우리은행 1002-839-625077 정주희"
  textarea.select()

  document.execCommand("copy")
  document.body.removeChild(textarea)

  return alert("복사되었습니다.")
}