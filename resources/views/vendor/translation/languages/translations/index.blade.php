@extends(backpack_view('layouts.top_left'))

@section('content')
    <div id="app">

        <form action="{{ route('languages.translations.index', ['language' => $language]) }}" method="get">

            <div class="panel">

                <div class="panel-header">

                    <div class="flex flex-grow justify-content-between items-center">

                        @include('translation::forms.search', ['name' => 'filter', 'value' => Request::get('filter')])

                        <div>

                            <div class="sm:hidden lg:flex items-center">

                                @include('translation::forms.select', ['name' => 'language', 'items' => $languages, 'submit' => true, 'selected' => $language])

                                @include('translation::forms.select', ['name' => 'group', 'items' => $groups, 'submit' => true, 'selected' => Request::get('group'), 'optional' => true])

                                <a href="{{ backpack_url(config('translation.ui_url') . '/' . $language . '/translations/create') }}" class="button">
                                    {{ __('translation::translation.add') }}
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="panel-body">

                    @if(count($translations))

                        <table>

                            <thead>
                                <tr>
                                    <th class="w-1/5 uppercase font-thin">{{ __('translation::translation.group_single') }}</th>
                                    <th class="w-1/5 uppercase font-thin">{{ __('translation::translation.key') }}</th>
                                    <th class="uppercase font-thin">{{ config('app.locale') }}</th>
                                    <th class="uppercase font-thin">{{ $language }}</th>
                                </tr>
                            </thead>

                            <tbody>
                                @foreach($translations as $type => $items)

                                    @foreach($items as $group => $translations)

                                        @foreach($translations as $key => $value)

                                            @if(!is_array($value['en']))
                                                <tr>
                                                    <td>{{ $group }}</td>
                                                    <td>{{ $key }}</td>
                                                    <td>{{ $value['en'] }}</td>
                                                    <td>
                                                        <translation-input
                                                            initial-translation="{{ $value[$language] }}"
                                                            language="{{ $language }}"
                                                            group="{{ $group }}"
                                                            translation-key="{{ $key }}"
                                                            route="admin/{{ config('translation.ui_url') }}">
                                                        </translation-input>
                                                    </td>
                                                </tr>
                                            @endif

                                        @endforeach

                                    @endforeach

                                @endforeach
                            </tbody>

                        </table>

                    @endif

                </div>

            </div>

        </form>

    </div>

@endsection

@include('vendor.translation.partials.push_assets')
