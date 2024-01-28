\version "2.22.1"

rudiment = \drummode {
  \grace {
    sn16^\markup { \teeny L }
    sn16^\markup { \teeny L }(
  } sn8^"R")
  \grace {
    sn16^\markup { \teeny L }
    sn16^\markup { \teeny L }(
  } sn8^"R")
  \grace {
    sn16^\markup { \teeny L }
    sn16^\markup { \teeny L }(
  } \tuplet 3/2 {
    sn16^"R")
    sn16^"L"
    sn16^"R"
  }
  sn8^"L"
  \grace {
    sn16^\markup { \teeny R }
    sn16^\markup { \teeny R }(
  } sn8^"L")
  \grace {
    sn16^\markup { \teeny R }
    sn16^\markup { \teeny R }(
  } sn8^"L")
  \grace {
    sn16^\markup { \teeny R }
    sn16^\markup { \teeny R }(
  } \tuplet 3/2 {
    sn16^"L")
    sn16^"R"
    sn16^"L"
  }
  sn8^"R"
}

\score {
  <<
    \new DrumStaff <<
      \new DrumVoice {
        \override Score.SystemStartBar.collapse-height = #-inf.0
        \omit Staff.Clef
        \override TextScript.Y-offset = 6
        \stemUp
        \rudiment
      }
    >>
  >>

  \layout {
    ragged-last = ##f
  }
}