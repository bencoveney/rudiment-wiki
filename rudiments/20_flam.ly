\version "2.22.1"

rudiment = \drummode {
  \repeat unfold 2 {
    \grace sn4^\markup { \teeny R }(sn4^"L") \grace sn4^\markup { \teeny L }(sn4^"R")
  }
}

\score {
  <<
    \new DrumStaff <<
      \new DrumVoice {
        \override Score.SystemStartBar.collapse-height = #-inf.0
        \omit Staff.TimeSignature
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