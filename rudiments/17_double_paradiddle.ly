\version "2.22.1"

rudiment = \drummode {
  \tuplet 3/2 { sn8^"R" sn8^"L" sn8^"R" } \tuplet 3/2 { sn8^"L" sn8^"R" sn8^"R" } \tuplet 3/2 { sn8^"L" sn8^"R" sn8^"L" } \tuplet 3/2 { sn8^"R" sn8^"L" sn8^"L" }
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