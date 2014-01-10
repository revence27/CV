thisYear = () ->
  dt = new Date()
  "#{['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'][dt.getMonth()]}, #{dt.getFullYear()}"

yearDiff = (x) -> alert "new Date().getFullYear() - #{x}"


Prince.addScriptFunc('thisYear', thisYear )
Prince.addScriptFunc('yearDiff', yearDiff )
